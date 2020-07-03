import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../app/users/users.module';
import { UsersController } from '../app/users/controllers/users.controller';
import { UsersService } from '../app/users/services/users.service';
import { User, UserSchema } from '../app/users/schemas/users.schema';
import { getModelToken } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';

describe('UserController', () => {
    let userController: UsersController;
    let usersService: UsersService;
    let userModel: User;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            // imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
            controllers: [UsersController],
            providers: [
                UsersService,
                {
                    provide: getModelToken('users'),
                    useValue: User,
                },
            ]
        }).compile();
        userController = app.get<UsersController>(UsersController);
        usersService = app.get<UsersService>(UsersService);
    });


    describe('root', () => {
        it('should return "Connected"', () => {
            expect(userController.checkConnection()).toBe('Connected');
        });
    });
});
