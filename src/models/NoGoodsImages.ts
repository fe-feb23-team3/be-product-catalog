import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'no_goods_images',
  createdAt: false,
  updatedAt: false,
})
export class NoGoodsImages extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    image: string;
}
