import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsString()
  public slug: string;

  @IsString()
  public process: string;

  @IsNumber()
  public weight: number;

  @IsEnum(['get inquity', 'out of stock'])
  public available: string;

  @IsString()
  public taste: string;

  @IsNumber()
  public score: number;

  @IsString()
  public variety: string;

  @IsString()
  public description: string;

  @IsString()
  public type: string;

  @IsString()
  public beans: string;

  @IsString()
  public elevation: string;

  @IsString()
  public image: string;
}
