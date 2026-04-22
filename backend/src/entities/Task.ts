import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User'; // Adjust the import according to your User entity path

@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'enum', enum: ['TODO', 'IN_PROGRESS', 'DONE'], default: 'TODO' })
    status: string;

    @Column({ type: 'enum', enum: ['BUG', 'FEATURE', 'IMPROVEMENT'], default: 'FEATURE' })
    type: string;

    @ManyToOne(() => User, user => user.tasks, { nullable: true })
    assignedTo: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}