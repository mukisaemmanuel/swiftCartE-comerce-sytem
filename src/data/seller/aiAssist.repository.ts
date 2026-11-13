import type { AiDescribeResult, AiCleanBackgroundResult } from '../../domain/seller.types';

export interface IAiAssistRepository {
  describeProduct(
    images: string[],
    category: string,
    tone?: 'professional' | 'persuasive' | 'casual' | 'market_direct'
  ): Promise<AiDescribeResult>;
  cleanBackground(
    image: string,
    style: 'white' | 'studio' | 'lifestyle'
  ): Promise<AiCleanBackgroundResult>;
}

export class MockAiAssistRepository implements IAiAssistRepository {
  private freeCleansRemaining = 3;

  async describeProduct(
    _images: string[],
    category: string,
    tone: 'professional' | 'persuasive' | 'casual' | 'market_direct' = 'professional'
  ): Promise<AiDescribeResult> {
    // Simulate brief AI processing delay
    await new Promise((r) => setTimeout(r, 600));

    let title = 'Premium Wireless Sound Pro Headset';
    let description =
      'Engineered for true Hi-Fi audio performance in bustling urban environments. Features advanced adaptive noise cancellation, 40-hour ultra-long battery life, fast USB-C recharging, and plush memory-foam ear cushions.';
    let price = 350000;
    let brand = 'Soundcore by Anker';
    let warranty = '12 Months Official Warranty';
    let expiryDate: string | undefined = undefined;

    if (category === 'groceries' || category === 'supermarket-food') {
      title = 'Nile Pure Organic Wild Honey Jar';
      description =
        '100% pure raw unprocessed Ugandan honey harvested sustainably from natural forest apiaries. Rich natural amber flavor, unpasteurized and packed with authentic enzymes.';
      price = 32000;
      brand = 'Nile Organics';
      warranty = 'Quality Freshness Guaranteed';
      expiryDate = new Date(Date.now() + 86400000 * 365).toISOString().split('T')[0];
    } else if (category === 'phones' || category === 'phones-tablets') {
      title = 'Infinix Smart 8 Dual SIM 4G Smartphone';
      description =
        'Features a crisp 90Hz fluid display, 5000mAh battery for all-day reliability across Kampala, dual AI rear camera, and side-mounted fingerprint scanner.';
      price = 420000;
      brand = 'Infinix';
      warranty = '12 Months Carlcare Warranty';
    } else if (category === 'fashion' || category === 'fashion-wear') {
      title = 'Breathable Classic Ugandan Canvas Sneakers';
      description =
        'Durable urban everyday sneakers crafted with flexible rubber tread and cushioned insoles for comfortable walking.';
      price = 85000;
      brand = 'StreetWalk UG';
      warranty = '30 Days Seller Defect Warranty';
    }

    if (tone === 'persuasive') {
      description = `Don't miss out! ${description} Grab yours now with rapid boda dispatch across Kampala!`;
    } else if (tone === 'market_direct') {
      description = `Genuine original stock in Nakasero! ${description} Same-day pickup or express boda delivery!`;
    }

    return {
      title,
      description,
      suggestedCategory: category || 'electronics',
      suggestedTags: ['Verified Seller', 'Express Boda', 'Escrow Protected', 'Top Quality'],
      suggestedPrice: price,
      unconfirmedFields: {
        brand,
        warranty,
        expiryDate,
      },
    };
  }

  async cleanBackground(
    image: string,
    style: 'white' | 'studio' | 'lifestyle' = 'white'
  ): Promise<AiCleanBackgroundResult> {
    await new Promise((r) => setTimeout(r, 700));

    if (this.freeCleansRemaining > 0) {
      this.freeCleansRemaining -= 1;
    }

    return {
      originalImage: image,
      cleanedImage: image || '/placeholders/headphones.svg',
      style,
      freeCleansRemainingToday: this.freeCleansRemaining,
    };
  }
}

