"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testUser_entity_1 = require("../entities/testUser.entity");
const typeorm_2 = require("typeorm");
const s3_service_1 = require("../s3.service");
let UsersService = class UsersService {
    constructor(userRepository, s3Service) {
        this.userRepository = userRepository;
        this.s3Service = s3Service;
    }
    async getPaginatedUsers(payload) {
        const users = await this.userRepository.find();
        return this.calculatePagination(users, payload);
    }
    calculatePagination(users, payload) {
        return {
            current: payload.count ? payload.count : 1,
            pages: Math.ceil(users.length / payload.count),
            count: payload.count,
            users,
        };
    }
    async getById(id) {
        return await this.userRepository.findBy({ id: id });
    }
    async updateUser(id, updateDto) {
        return await this.userRepository.update({ id: id }, updateDto);
    }
    async delete(id) {
        return await this.userRepository.delete({ id });
    }
    async create(user, file) {
        const photoUrl = await this.s3Service.uploadFile(file);
        if (!photoUrl) {
            throw new Error('Something with s3 bucket');
        }
        const newEntry = this.userRepository.create({ ...user, photo: photoUrl });
        return await this.userRepository.save(newEntry);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testUser_entity_1.TestUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        s3_service_1.S3Service])
], UsersService);
//# sourceMappingURL=users.service.js.map