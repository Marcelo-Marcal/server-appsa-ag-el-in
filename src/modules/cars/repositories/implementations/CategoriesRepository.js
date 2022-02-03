"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
var Category_1 = require("../../model/Category");
var CategoriesRepository = /** @class */ (function () {
    function CategoriesRepository() {
        this.categories = [];
    }
    CategoriesRepository.getInstance = function () {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    };
    //Criar uma função para cadastra a categoria
    CategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, shortName = _a.shortName;
        var category = new Category_1.Category();
        Object.assign(category, {
            name: name,
            shortName: shortName,
            created_at: new Date(),
        });
        this.categories.push(category);
    };
    CategoriesRepository.prototype.list = function () {
        return this.categories;
    };
    CategoriesRepository.prototype.findByName = function (name) {
        var category = this.categories.find(function (category) { return category.name === name; });
        return category;
    };
    return CategoriesRepository;
}());
exports.CategoriesRepository = CategoriesRepository;
