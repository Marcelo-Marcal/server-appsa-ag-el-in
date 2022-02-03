"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationsRepository = void 0;
var Specification_1 = require("../../model/Specification");
var SpecificationsRepository = /** @class */ (function () {
    function SpecificationsRepository() {
        this.specifications = [];
    }
    SpecificationsRepository.prototype.create = function (_a) {
        var name = _a.name, shortName = _a.shortName;
        var specification = new Specification_1.Specification();
        Object.assign(specification, {
            name: name,
            shortName: shortName,
            created_at: new Date(),
        });
        //Inserir na tabelo o specification
        this.specifications.push(specification);
    };
    SpecificationsRepository.prototype.findByName = function (name) {
        var specification = this.specifications.find(function (specification) { return specification.name === name; });
        return specification;
    };
    return SpecificationsRepository;
}());
exports.SpecificationsRepository = SpecificationsRepository;
