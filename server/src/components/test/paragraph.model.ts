import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Test } from "./test.model";

@Entity()
export class TestParagraph extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    image: string;

    @Column()
    test_id: number;

    @ManyToOne(() => Test, (test) => test.paragraphs)
    @JoinColumn({ name: "test_id" })
    test: Test;

    hola() {
        return "hola";
    }
}
