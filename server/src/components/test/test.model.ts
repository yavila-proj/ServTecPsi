import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Question } from "../question";
import { Result } from "../result/result.model";
import { TestParagraph } from "./paragraph.model";

@Entity()
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => TestParagraph, (paragraph) => paragraph.test)
    paragraphs: TestParagraph[];

    @OneToMany(() => Question, (question) => question.test)
    questions: Question[];

    @OneToMany(() => Result, (result) => result.test)
    results: Result[];

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}
