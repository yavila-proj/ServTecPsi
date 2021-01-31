import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Author } from "../author";

@Entity()
export class DailyPhrase extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phrase: string;

    @Column()
    day: string;

    @Column()
    author_id: number;

    @ManyToOne(() => Author, (author) => author.phrases)
    @JoinColumn({ name: "author_id" })
    author: Author;
}
