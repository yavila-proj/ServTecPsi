import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Test } from "../test/test.model";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    value: number;

    @Column()
    test_id: number;

    @ManyToOne(() => Test, (test) => test.questions)
    @JoinColumn({ name: "test_id" })
    test: Test;
}
