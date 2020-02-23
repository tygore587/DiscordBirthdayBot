import { Service } from "typedi";
import { ConfirmationRepository } from "../entity/repository/confirmationRepository";
import { Confirmation } from "../entity/model/confirmation";

@Service()
export class ConfirmationService {

    constructor(private repo : ConfirmationRepository) {

    }

    async confirmationExists(guildId : string, userId: string) : Promise<boolean> {
        return await this.repo.getConfirmation(userId,guildId) ? true : false;
    }

    async addOrUpdate(confirmation: Confirmation) : Promise<Confirmation> {
        return this.repo.save(confirmation);
    }

    async getConfirmation(confirmationCode: string): Promise<Confirmation | undefined> {
        return this.repo.findById(confirmationCode);
    }
    
}