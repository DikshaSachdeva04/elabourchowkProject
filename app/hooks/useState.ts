/*import { State, City } from 'country-state-city';

const formattedStateAndCity = ({ countryCode = 'IN', cityCode = 'TG' }) => {
    const stateData = State.getStatesOfCountry(countryCode).map(state => ({
        value: state.name,
        displayValue: state.name
    }));

    const cityData = City.getCitiesOfState(countryCode, cityCode).map(city => ({
        value: city.name,
        displayValue: city.name
    }));
}

const useStates=()=>{
    const getAll=()=> formattedStateAndCity;

    const getByValue=(value:string)=>{
        return formattedStateAndCity.find((item)=>item.value===value);
    }
}
import { State, City } from 'country-state-city';

const formattedStates = State.getStatesOfCountry('IN').map((state) => ({
  value: state.isoCode,
  label: state.name,
  // Add other properties specific to states if available
}));

const formattedCities = City.getCitiesOfState('IN', 'TG').map((city) => ({
  value: city.name,
  label: city.name,
  // Add other properties specific to cities if available
}));

const useStateAndCity = () => {
  const getAllStates = () => formattedStates;

  const getAllCities = () => formattedCities;

  const getStateByValue = (value: string) => {
    return formattedStates.find((state) => state.value === value);
  };

  const getCityByValue = (value: string) => {
    return formattedCities.find((city) => city.value === value);
  };

  return {
    getAllStates,
    getAllCities,
    getStateByValue,
    getCityByValue
  };
};

export default useStateAndCity;/*/









    
