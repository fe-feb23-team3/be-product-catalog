import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  createdAt: false,
  updatedAt: false,
})
export class Phone extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    id: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    category: string;

  @PrimaryKey
  @AllowNull(false)
  @Column({
    field: 'phone_id',
    type: DataTypes.STRING,
  })
    phoneId: string;

  @AllowNull(false)
  @Column({
    field: 'item_id',
    type: DataTypes.STRING,
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    field: 'full_price',
    type: DataTypes.INTEGER,
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    image: string;
}
