
const _data = {
    laws: [],
    budget: 1000000,
    citizensSatisfactions: 0
};

const Store = {
    add: item => {
        _data.laws.push(item);
        _data.citizensSatisfactions += -10;
    },
    getAllLaw: () => [..._data.laws],
    getAllSatisfactions: () => _data.citizensSatisfactions,
    getBudget: () => _data.budget,
    spendHoliday: () => {
        _data.budget += -50000;
        _data.citizensSatisfactions += +5;
    }
};

Object.freeze(Store);

export default Store;
