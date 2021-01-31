import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { DailyPhrase } from "../dailyPhrase/dailyPhrase.model";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => DailyPhrase, (phrase) => phrase.author)
    phrases: DailyPhrase[];
}
