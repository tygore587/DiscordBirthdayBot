import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Confirmation } from '../model/confirmation';

@Service()
export class ConfirmationRepository {
    constructor(@InjectRepository(Confirmation) private repository: Repository<Confirmation>) {}

    async getConfirmation(userId: string, guildId: string): Promise<Confirmation | undefined> {
        return this.repository.findOne({
            where: {
                userId,
                guildId,
            },
        });
    }

    async save(confirmation: Confirmation) : Promise<Confirmation> {
        return this.repository.save(confirmation);
    }

    async findById(confirmationCode : string) : Promise<Confirmation | undefined> {
        return this.repository.findOne({confirmationCode})
    }
 }
