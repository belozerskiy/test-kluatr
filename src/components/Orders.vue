<template>
  <div class="jumbotron">
    <template v-if="!status">
      <h3>{{ message }}</h3>
    </template> 
    <template v-else>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Products count</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ orderId, count, total } in currentPage"
          :key="orderId"
        >
          <td>№{{ orderId }}</td>
          <td>{{ count }}</td>
          <td>{{ total | currency }}</td>
        </tr>
      
      </tbody>
    </table>
    <ul class="pagination">
      <li 
        v-for="numOfPage in pagination" 
        :key="numOfPage" 
        :class="{ active: isCurrentPage(numOfPage) }"
      >
        <a 
          href="#" 
          @click="setCurrentPage(numOfPage)"
        >
        {{ numOfPage }}
        </a>
      </li>
    </ul>
    </template>
  </div>
</template>
<script>
import * as api from "@/api";

export default {
  name: "Orders",
  data() {
    return {
      status: false,
      message: "",
      orders: [],
      page: 1
    };
  },
  computed: {
    pagination() {
      return Math.round(this.orders.length / 10);
    },
    currentPage() {
      return this.sortedOrders.slice((this.page - 1) * 10, this.page * 10);
    },
    sortedOrders() {
      const arr = [...this.orders];
      return arr.sort((a, b) => {
        if (a.orderId > b.orderId) return 1;
        return -1;
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const self = vm;
      api
        .getOrders()
        .then(response => {
          self.status = response.data.success;
          self.orders = response.data.data;
        })
        .catch(err => {
          self.status = err.response.data.success;
          self.message = err.response.data.error;
        });
    });
  },
  filters: {
    currency(value) {
      return `${value} ₽`;
    }
  },
  methods: {
    setCurrentPage(page) {
      this.page = page;
    },
    isCurrentPage(value) {
      return this.page === value;
    }
  }
};
</script>
