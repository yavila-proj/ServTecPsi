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
export class Result extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    text: string;

    @Column()
    image: string;

    @Column()
    test_id: number;

    @ManyToOne(() => Test, (test) => test.results)
    @JoinColumn({ name: "test_id" })
    test: Test;
}
