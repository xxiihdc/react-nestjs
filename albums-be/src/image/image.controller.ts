import { Controller, Get } from '@nestjs/common';

@Controller('image')
export class ImageController {
  private readonly images = [
    'img_9_919.jpeg',
    'img_13_1592.jpeg',
    'img_7_612.jpeg',
    'img_16_992.jpeg',
    'img_21_981.jpeg',
    'img_4_899.jpeg',
    'img_12_1472.jpeg',
    'img_10_736.jpeg',
    'img_19_3024.jpeg',
    'img_5_1308.jpeg',
    'img_22_736.jpeg',
    'img_20_912.jpeg',
    'img_2_972.jpeg',
    'img_14_973.jpeg',
    'img_17_1592.jpeg',
    'img_11_1594.jpeg',
    'img_3_736.jpeg',
    'img_8_1204.jpeg',
    'img_15_720.jpeg',
    'img_18_4032.jpeg',
    'img_6_810.jpeg',
    'img_1_1312.jpeg',
  ];

  extractImageDetails = (image: string): { name: string; height: number } => {
    const parts = image.split('_');
    const name = image;
    const height = parseInt(parts[2].split('.')[0]);
    return { name, height };
  };

  @Get()
  async getImageFiles(): Promise<any> {
    const imageDetails = await Promise.all(
      this.images.map(async (imageName) => {
        return this.extractImageDetails(imageName);
      }),
    );

    return imageDetails;
  }
}
