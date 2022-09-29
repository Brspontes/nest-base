import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from 'src/infra/config/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],
})
export class DataBaseModule {}
