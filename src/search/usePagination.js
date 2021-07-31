import { ref, computed, onMounted } from 'vue';

export default function usePagination(filteredSearchResults) {
  const pageSize = 5;
  const currentPage = ref(1);
  const nextPage = () => { currentPage.value += 1; };
  const prevPage = () => { currentPage.value -= 1; };

  onMounted(() => console.log('Mounted: useSearch'));

  const pagedResults = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = currentPage.value * pageSize;
    return filteredSearchResults.value.slice(startIndex, endIndex);
  });

  const currentStartIndex = computed(
    () => (currentPage.value - 1) * pageSize + 1,
  );

  const currentEndIndex = computed(() => {
    const end = currentStartIndex.value + pageSize;
    return end > filteredSearchResults.value.length
      ? filteredSearchResults.value.length
      : end;
  });

  return {
    currentPage,
    nextPage,
    prevPage,
    pageSize,
    currentStartIndex,
    currentEndIndex,
    pagedResults,
  };
}
