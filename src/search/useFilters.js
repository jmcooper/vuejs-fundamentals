import { reactive, computed, onMounted } from 'vue';

function filterResults(parts, filters) {
  return parts.filter((part) => filters.every(
    (filter) => {
      const filterField = Object.keys(filter)[0];
      const filterValue = filter[filterField];
      return part[filterField] === filterValue;
    },
  ));
}

export default function useFilters(searchResults) {
  const filters = reactive([]);

  const applyFilters = (filter) => filters.push(filter);
  const clearFilters = () => filters.splice(0, filters.length);

  onMounted(() => console.log('Mounted: useFilters'));

  const filteredResults = computed(() => filterResults(searchResults, filters));

  return {
    filters,
    applyFilters,
    clearFilters,
    filteredResults,
  };
}
