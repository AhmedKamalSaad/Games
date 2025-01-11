import { Sorting } from "./sorting";

const SortingList =  () => {
const sortOrders = [
  {value:'-added',label:'Date added'},
  {value:'name',label:'Name'},
  {value:'-released',label:'Released date'},
  {value:'-metacritic',label:'Popularity'},
  {value:'-rating',label:'Average rating'},
]
  return (
      <Sorting array={sortOrders} />
  );
};

export default SortingList;
