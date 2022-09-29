import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { DataBaseModule } from './infra/modules/DatabseModule/database.module'

@Module({
  imports: [ConfigModule.forRoot(), DataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
