import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StatisticsController} from "./StatisticsController";
import {StatisticsService} from "./StatisticsService";
import {StatusesRepository} from "../statuses/StatusesRepository";
import {StatusLikesRepository} from "../statuses/StatusLikesRepository";
import {BtfsHashRepository} from "../btfs-sync/BtfsHashRepository";
import {UsersRepository} from "../users";

@Module({
    controllers: [StatisticsController],
    providers: [StatisticsService],
    imports: [
        TypeOrmModule.forFeature([
            StatusesRepository,
            StatusLikesRepository,
            BtfsHashRepository,
            UsersRepository
        ])
    ]

})
export class StatisticsModule {

}
