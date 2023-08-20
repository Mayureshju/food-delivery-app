export function searchRest(searchText, allRestaurants) {
    let data = allRestaurants.filter((res) => {
      return res?.info?.name?.toLowerCase()?.includes(searchText);
    });
    return data;
  }