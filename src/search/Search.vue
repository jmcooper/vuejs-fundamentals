<template>
  <div>
    <div>
      <input
        placeholder="Enter Search Term"
        @input="search($event.target.value)"
      />
    </div>
    <div class="filters">
      <div><button @click="applyFilters({type:'heads'})">Filter for Heads</button></div>
      <div><button @click="applyFilters({type:'arms'})">Filter for Arms</button></div>
      <div><button @click="applyFilters({type:'torsos'})">Filter for Torsos</button></div>
      <div><button @click="applyFilters({type:'bases'})">Filter for Bases</button></div>
      <div><button @click="clearFilters()">Clear Filters</button></div>
      <div>Filters: {{filters}}</div>
    </div>
  </div>
  <div>
    <ul>
      <li v-for="(result, index) in pagedResults" :key="index">
        <div><img :src="result.src"/></div>
        <div>
          <div class="title">{{result.title}}</div>
          <div>{{result.description}}</div>
          <div>Type: {{result.type.substring(0, result.type.length -1)}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div>
    <button @click="prevPage()" class="button-link">Previous Page</button>
    Showing {{currentStartIndex}} to {{currentEndIndex}} of {{resultCount}} results
    <button @click="nextPage()" class="button-link">Next Page</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import useSearch from './useSearch';
import useFilters from './useFilters';
import usePagination from './usePagination';

export default {
  setup(props) {
    const { searchResults, search } = useSearch(props.searchTerm);

    const {
      filters,
      applyFilters,
      clearFilters,
      filteredResults,
    } = useFilters(searchResults);

    const {
      currentPage,
      nextPage,
      prevPage,
      currentStartIndex,
      currentEndIndex,
      pagedResults,
    } = usePagination(filteredResults);

    const resultCount = computed(() => filteredResults.value.length);

    return {
      pagedResults,
      search,
      filters,
      applyFilters,
      clearFilters,
      currentPage,
      nextPage,
      prevPage,
      currentStartIndex,
      currentEndIndex,
      resultCount,
    };
  },
};
</script>
<style scoped>
input {
  font-size:20px;
  padding: 8px;
  width:80%
}
img {
  width:50px;
  margin-right:10px;
}
tr {
  margin-bottom:5px;
}
td, th {
  text-align: left;
}
ul {
  list-style-type: none;
}
li {
  display: flex;
  margin-bottom: 20px;
}
.title {
  font-weight: bold;
}
.button-link {
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
  color: #1e87ba;
}
.filters {
  margin-top: 10px;
  display: flex;
}
.filters > * {
  margin-right: 10px;
}
</style>
