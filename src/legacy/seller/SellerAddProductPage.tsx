import React, { useState } from 'react';
import { useSellerProducts, useAiAssist } from '../../hooks/useSeller';
import { Icon } from '../../components/shared/Icon';
import SafeImage from '../../components/shared/SafeImage';
import { PRODUCT_STATUS } from '../../../shared/statuses';

export interface SellerAddProductPageProps {
  onNavigate: (path: string) => void;
  initialStep?: number;
  editMode?: boolean;
}

interface PhotoItem {
  id: string;
  originalUrl: string;
  cleanedUrl?: string;
  isCover: boolean;
}

export const SellerAddProductPage: React.FC<SellerAddProductPageProps> = ({
  onNavigate,
  initialStep = 1,
  editMode = false,
}) => {
  const { createProduct } = useSellerProducts();
  const { describeProduct, cleanBackground, isProcessing } = useAiAssist();

  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  // Step 1: Photos
  const [photos, setPhotos] = useState<PhotoItem[]>([
    {
      id: 'p-1',
      originalUrl: '/placeholders/product-audio.svg',
      isCover: true,
    },
  ]);
  const [photoWarning, setPhotoWarning] = useState<string | null>(null);

  // Step 2: Background clean
  const [selectedBgStyle, setSelectedBgStyle] = useState<'white' | 'studio' | 'lifestyle'>('white');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [remainingFreeCleans, setRemainingFreeCleans] = useState<number>(3);
  const [cleanError, setCleanError] = useState<string | null>(null);

  // Step 3: Description & AI Assist
  const [title, setTitle] = useState<string>('Wireless Bluetooth Headphones Pro');
  const [description, setDescription] = useState<string>(
    'High-fidelity over-ear noise-cancelling headphones tailored for music lovers and professionals in Uganda.'
  );
  const [tone, setTone] = useState<'professional' | 'persuasive' | 'casual'>('professional');

  // "Please confirm" unpredicted fields
  const [brandConfirmed, setBrandConfirmed] = useState<boolean>(false);
  const [materialConfirmed, setMaterialConfirmed] = useState<boolean>(false);
  const [warrantyConfirmed, setWarrantyConfirmed] = useState<boolean>(false);

  // Step 4: Catalog Details
  const [category, setCategory] = useState<string>('Electronics');
  const [price, setPrice] = useState<number>(185000);
  const [stock, setStock] = useState<number>(14);
  const [sku, setSku] = useState<string>('HP-PRO-01');
  const [weightKg, setWeightKg] = useState<number>(0.4);

  // Step 5: Review & Submit
  const [accuracyConfirmed, setAccuracyConfirmed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Helpers
  const coverPhoto = photos.find((p) => p.isCover) || photos[0];

  const handleAddSamplePhoto = () => {
    if (photos.length >= 8) {
      setPhotoWarning('Maximum 8 photos allowed per product listing.');
      return;
    }
    const newId = `p-${Date.now()}`;
    setPhotos([
      ...photos,
      {
        id: newId,
        originalUrl: '/placeholders/product-audio.svg',
        isCover: false,
      },
    ]);
    setPhotoWarning(null);
  };

  const handleSetCover = (id: string) => {
    setPhotos(
      photos.map((p) => ({
        ...p,
        isCover: p.id === id,
      }))
    );
  };

  const handleRemovePhoto = (id: string) => {
    if (photos.length <= 1) {
      setPhotoWarning('At least 1 product photo is required.');
      return;
    }
    const remaining = photos.filter((p) => p.id !== id);
    if (!remaining.some((p) => p.isCover) && remaining.length > 0) {
      remaining[0].isCover = true;
    }
    setPhotos(remaining);
  };

  // Run AI Background Clean
  const handleRunCleanBackground = async () => {
    setCleanError(null);
    if (remainingFreeCleans <= 0) {
      setCleanError('You have reached the daily limit of 5 free photo studio cleans.');
      return;
    }
    try {
      const res = await cleanBackground(coverPhoto.originalUrl, selectedBgStyle);
      setPhotos(
        photos.map((p) =>
          p.id === coverPhoto.id ? { ...p, cleanedUrl: res.cleanedImage } : p
        )
      );
      setRemainingFreeCleans(res.freeCleansRemainingToday);
    } catch {
      setCleanError('Photo cleanup service encountered a momentary issue. Please retry.');
    }
  };

  // Run AI Description Generation
  const handleRunAiDescribe = async () => {
    try {
      const res = await describeProduct(
        photos.map((p) => p.cleanedUrl || p.originalUrl),
        category,
        tone
      );
      setTitle(res.title);
      setDescription(res.description);
      // Reset confirmations on regenerate
      setBrandConfirmed(false);
      setMaterialConfirmed(false);
      setWarrantyConfirmed(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Step 3 gate check: all three "Please confirm" fields must be checked
  const isStep3Complete = brandConfirmed && materialConfirmed && warrantyConfirmed && title.trim().length > 0;

  // Final Submit
  const handleSubmitProduct = async (status: typeof PRODUCT_STATUS[keyof typeof PRODUCT_STATUS]) => {
    if (!accuracyConfirmed && status === PRODUCT_STATUS.UNDER_REVIEW) return;
    setIsSubmitting(true);
    await createProduct({
      sellerId: 'seller-soundcore',
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description,
      categoryId: category.toLowerCase(),
      categoryName: category,
      brand: 'Soundcore',
      price,
      stock,
      sku,
      weightKg,
      status,
      images: photos.map((p) => p.cleanedUrl || p.originalUrl),
      variants: [],
      warranty: '6 Months',
    });
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  if (submitSuccess) {
    return (
      <div className="bg-[var(--d-surface)] rounded-2xl p-10 border border-[var(--d-border)] text-center max-w-xl mx-auto my-12 space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
          <Icon name="check_circle" className="text-4xl" />
        </div>
        <h2 className="text-2xl font-extrabold text-[var(--d-text-primary)]">
          Product Successfully Submitted!
        </h2>
        <p className="text-xs text-[var(--d-text-secondary)] leading-relaxed">
          Your product listing has been sent to the moderation queue. You will receive an in-app notice once approved.
        </p>
        <div className="pt-4 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/seller/products')}
            className="touch-target px-5 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
          >
            Back to Products Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--d-text-primary)]">
            {editMode ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-xs text-[var(--d-text-secondary)] mt-0.5">
            5-step listing workflow with AI photo studio and description assistant.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/seller/products')}
          className="touch-target text-xs font-bold text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]"
        >
          Cancel
        </button>
      </div>

      {/* Wizard Step Stepper */}
      <div className="grid grid-cols-5 gap-2 border-b border-[var(--d-border)] pb-4">
        {[
          { step: 1, label: '1. Photos' },
          { step: 2, label: '2. AI Studio' },
          { step: 3, label: '3. Description' },
          { step: 4, label: '4. Details' },
          { step: 5, label: '5. Review' },
        ].map((s) => (
          <div
            key={s.step}
            onClick={() => {
              if (s.step < currentStep || (currentStep === 3 && isStep3Complete)) {
                setCurrentStep(s.step);
              }
            }}
            className={`cursor-pointer text-center py-2 border-b-2 transition-all ${
              currentStep === s.step
                ? 'border-[#FF8A1F] text-[#FF8A1F] font-bold'
                : currentStep > s.step
                ? 'border-emerald-500 text-emerald-400 font-semibold'
                : 'border-transparent text-[var(--d-text-secondary)]'
            }`}
          >
            <span className="text-xs sm:text-sm">{s.label}</span>
          </div>
        ))}
      </div>

      {/* STEP 1: Photos */}
      {currentStep === 1 && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Upload Product Photos</h2>
              <p className="text-xs text-[var(--d-text-secondary)]">
                Add up to 8 real photos of your item. First photo is used as the cover.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddSamplePhoto}
              className="touch-target px-4 py-2 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] text-xs font-bold text-[var(--d-text-primary)] border border-[var(--d-border)] flex items-center gap-1.5 cursor-pointer"
            >
              <Icon name="add_a_photo" className="text-sm" />
              <span>Add Photo ({photos.length}/8)</span>
            </button>
          </div>

          {photoWarning && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              {photoWarning}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {photos.map((p, idx) => (
              <div
                key={p.id}
                className="relative group rounded-xl overflow-hidden border border-[var(--d-border)] bg-[var(--d-surface-container)] aspect-square"
              >
                <SafeImage
                  src={p.cleanedUrl || p.originalUrl}
                  alt={`Photo ${idx + 1}`}
                  aspectRatio="aspect-square"
                  className="w-full h-full object-cover"
                />
                {p.isCover && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#FF8A1F] text-white text-[10px] font-bold">
                    Cover Photo
                  </span>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {!p.isCover && (
                    <button
                      type="button"
                      onClick={() => handleSetCover(p.id)}
                      className="px-2 py-1 rounded bg-white text-gray-900 text-[10px] font-bold"
                    >
                      Make Cover
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(p.id)}
                    className="p-1.5 rounded-full bg-rose-600 text-white"
                    aria-label="Remove photo"
                  >
                    <Icon name="delete" className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[var(--d-surface-container-low)] border border-[var(--d-border)] text-xs text-[var(--d-text-secondary)] space-y-1">
            <p className="font-bold text-[var(--d-text-primary)]">Photo Guidelines:</p>
            <p>• Plain, well-lit shots taken directly with your phone work best.</p>
            <p>• Avoid watermarks, external URLs, or stock photos from other websites.</p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Continue to AI Studio
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: AI Photo Studio */}
      {currentStep === 2 && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-[var(--d-text-primary)]">
                Make My Photos Look Professional
              </h2>
              <p className="text-xs text-[var(--d-text-secondary)]">
                Replace distracting backgrounds with clean studio backdrops.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold self-start sm:self-auto">
              {remainingFreeCleans} of 5 free cleans remaining today
            </span>
          </div>

          {/* Mandatory compliance rule */}
          <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
            <strong>Policy notice:</strong> Photos must show the real item. Only the background is changed.
          </div>

          {cleanError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
              {cleanError}
            </div>
          )}

          {/* Studio Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[var(--d-text-secondary)]">Background Style:</span>
            {(['white', 'studio', 'lifestyle'] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedBgStyle(st)}
                className={`touch-target px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                  selectedBgStyle === st
                    ? 'bg-[#FF8A1F] text-white'
                    : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] border border-[var(--d-border)]'
                }`}
              >
                {st}
              </button>
            ))}

            <button
              type="button"
              onClick={handleRunCleanBackground}
              disabled={isProcessing}
              className="touch-target ml-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Icon name="auto_fix_high" className="text-sm" />
              <span>{isProcessing ? 'Cleaning Background...' : 'Clean Background'}</span>
            </button>
          </div>

          {/* Before / After Comparison Slider */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--d-border)] bg-gray-900 aspect-video max-h-[380px] flex items-center justify-center">
            {coverPhoto.cleanedUrl ? (
              <div className="relative w-full h-full select-none">
                <img
                  src={coverPhoto.cleanedUrl}
                  alt="Cleaned preview"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={coverPhoto.originalUrl}
                    alt="Original preview"
                    className="absolute inset-0 w-full h-full object-contain max-w-none"
                    style={{ width: '100%' }}
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                    Original
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                  AI Studio
                </span>
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow"
                  style={{ left: `${sliderPos}%` }}
                />
              </div>
            ) : (
              <div className="text-center p-6 space-y-2">
                <Icon name="photo_camera" className="text-4xl text-gray-500 mx-auto" />
                <p className="text-xs text-gray-400">
                  Click <strong>Clean Background</strong> above to generate a professional studio cutout.
                </p>
              </div>
            )}
          </div>

          {coverPhoto.cleanedUrl && (
            <div className="space-y-1">
              <label htmlFor="slider-pos" className="text-xs text-[var(--d-text-secondary)]">
                Drag slider to compare Before / After:
              </label>
              <input
                id="slider-pos"
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full accent-[#FF8A1F]"
              />
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Back
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)] hover:text-[var(--d-text-primary)]"
              >
                Skip AI Studio
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
              >
                Continue to Description
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: AI Description & Required Confirmation Gate */}
      {currentStep === 3 && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-[var(--d-text-primary)]">
                Write My Description (AI Assistant)
              </h2>
              <p className="text-xs text-[var(--d-text-secondary)]">
                Generated from your product photos and selected category.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--d-text-secondary)] font-bold">Tone:</span>
              {(['professional', 'persuasive', 'casual'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`touch-target px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                    tone === t
                      ? 'bg-[#FF8A1F] text-white'
                      : 'bg-[var(--d-surface-container)] text-[var(--d-text-secondary)] border border-[var(--d-border)]'
                  }`}
                >
                  {t}
                </button>
              ))}
              <button
                type="button"
                onClick={handleRunAiDescribe}
                disabled={isProcessing}
                className="touch-target px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <Icon name="refresh" className="text-xs" />
                <span>{isProcessing ? 'Generating...' : 'Regenerate'}</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="product-title" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Product Title (Required)
              </label>
              <input
                id="product-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-sm font-bold text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            <div>
              <label htmlFor="short-desc" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Full Description
              </label>
              <textarea
                id="short-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)] focus:outline-none focus:border-[#FF8A1F]"
              />
            </div>

            {/* MANDATORY CONFIRMATION BOX: AI COULD NOT SEE THESE */}
            <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Icon name="help" className="text-base" />
                <span>Please Confirm: Fields the AI assistant could not verify from photos</span>
              </div>
              <p className="text-[11px] text-amber-200/80">
                You must confirm or edit these physical product specifications before continuing:
              </p>

              <div className="space-y-2 pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[var(--d-text-primary)]">
                  <input
                    type="checkbox"
                    checked={brandConfirmed}
                    onChange={(e) => setBrandConfirmed(e.target.checked)}
                    className="accent-[#FF8A1F] w-4 h-4"
                  />
                  <span>
                    <strong>Brand / Origin:</strong> Soundcore Official Manufacturer Packaging
                  </span>
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    Please confirm
                  </span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[var(--d-text-primary)]">
                  <input
                    type="checkbox"
                    checked={materialConfirmed}
                    onChange={(e) => setMaterialConfirmed(e.target.checked)}
                    className="accent-[#FF8A1F] w-4 h-4"
                  />
                  <span>
                    <strong>Material:</strong> Matte ABS plastic casing with padded protein leather
                  </span>
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    Please confirm
                  </span>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[var(--d-text-primary)]">
                  <input
                    type="checkbox"
                    checked={warrantyConfirmed}
                    onChange={(e) => setWarrantyConfirmed(e.target.checked)}
                    className="accent-[#FF8A1F] w-4 h-4"
                  />
                  <span>
                    <strong>Warranty:</strong> 6 Months manufacturer warranty included
                  </span>
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    Please confirm
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              disabled={!isStep3Complete}
              className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs cursor-pointer transition-all"
            >
              Continue to Catalog Details
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Catalog Details */}
      {currentStep === 4 && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
          <h2 className="text-lg font-bold text-[var(--d-text-primary)]">Pricing & Inventory Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cat-select" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Category
              </label>
              <select
                id="cat-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              >
                <option value="Electronics">Electronics</option>
                <option value="Phones">Phones</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Beauty">Beauty</option>
              </select>
            </div>

            <div>
              <label htmlFor="prod-price" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Price (UGX, Integer)
              </label>
              <input
                id="prod-price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Math.round(Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-sm font-bold text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="prod-stock" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Available Stock Quantity
              </label>
              <input
                id="prod-stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(Math.max(0, Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="prod-sku" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                SKU / Barcode
              </label>
              <input
                id="prod-sku"
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>

            <div>
              <label htmlFor="prod-weight" className="block text-xs font-bold text-[var(--d-text-secondary)] mb-1">
                Package Weight (kg)
              </label>
              <input
                id="prod-weight"
                type="number"
                step="0.1"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-[var(--d-surface)] border border-[var(--d-border)] text-xs text-[var(--d-text-primary)]"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(5)}
              className="touch-target px-6 py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E0720A] text-white font-bold text-xs cursor-pointer"
            >
              Continue to Preview & Review
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Buyer Preview & Accuracy Confirmation Gate */}
      {currentStep === 5 && (
        <div className="bg-[var(--d-surface)] rounded-2xl p-6 border border-[var(--d-border)] space-y-6">
          <h2 className="text-lg font-bold text-[var(--d-text-primary)]">
            Buyer-View Preview & Verification
          </h2>

          {/* Product Preview Card */}
          <div className="max-w-md mx-auto p-5 rounded-2xl bg-[var(--d-surface-container)] border border-[var(--d-border)] space-y-4 shadow-lg">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-900 border border-[var(--d-border)]">
              <SafeImage
                src={coverPhoto.cleanedUrl || coverPhoto.originalUrl}
                alt={title}
                aspectRatio="aspect-square"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-[#FF8A1F] font-bold">
                {category}
              </span>
              <h3 className="text-base font-extrabold text-[var(--d-text-primary)] mt-1">{title}</h3>
              <p className="text-xs text-[var(--d-text-secondary)] mt-1 line-clamp-2">{description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-black text-[#FF8A1F]">UGX {price.toLocaleString()}</span>
                <span className="text-xs text-emerald-400 font-bold">{stock} in stock</span>
              </div>
            </div>
          </div>

          {/* Photos comparison info */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--d-surface-container-low)] border border-[var(--d-border)] text-xs text-[var(--d-text-secondary)]">
            <Icon name="photo_library" className="text-lg text-[var(--d-text-primary)]" />
            <span>
              Listing contains <strong>{photos.length} photo(s)</strong> (original and studio cutouts preserved).
            </span>
          </div>

          {/* CRITICAL ACCURACY CONFIRMATION CHECKBOX GATE */}
          <div className="p-4 rounded-xl bg-orange-500/10 border-2 border-orange-500/30">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={accuracyConfirmed}
                onChange={(e) => setAccuracyConfirmed(e.target.checked)}
                className="accent-[#FF8A1F] w-5 h-5 mt-0.5"
              />
              <span className="text-xs text-[var(--d-text-primary)] leading-relaxed">
                <strong>I confirm this description and photos accurately show my product.</strong> I understand that delivering items that differ significantly from this description will trigger buyer returns and freeze escrow payouts.
              </span>
            </label>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[var(--d-border)]">
            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              className="touch-target px-4 py-2 rounded-xl text-xs font-bold text-[var(--d-text-secondary)]"
            >
              Back
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleSubmitProduct(PRODUCT_STATUS.DRAFT)}
                disabled={isSubmitting}
                className="touch-target px-4 py-2.5 rounded-xl bg-[var(--d-surface-container)] hover:bg-[var(--d-surface-container-high)] border border-[var(--d-border)] text-xs font-bold text-[var(--d-text-primary)] cursor-pointer"
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={() => handleSubmitProduct(PRODUCT_STATUS.UNDER_REVIEW)}
                disabled={!accuracyConfirmed || isSubmitting}
                className="touch-target px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs cursor-pointer shadow-md shadow-orange-500/20"
              >
                {isSubmitting ? 'Submitting...' : 'Submit for Review'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerAddProductPage;
