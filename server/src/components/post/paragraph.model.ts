import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./post.model";

@Entity()
export class PostParagraph extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    image: string;

    @Column()
    post_id: number;

    @ManyToOne(() => Post, (post) => post.paragraphs)
    @JoinColumn({ name: "post_id" })
    post: Post;
}
