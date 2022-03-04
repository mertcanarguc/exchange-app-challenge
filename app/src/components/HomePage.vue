<template>
  <div>
    <nav class="navbar navbar-default" style="height: 60px">
      <div class="container-fluid">
        <div class="navbar-header">
          <a
            class="navbar-brand"
            href="#"
            style="color: black; padding: 10px; font-size: 15pt"
          >
            {{ firstname }} {{ lastname }}
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a @click="logout()" style="color: black; text-decoration: none"
              >Sign Out <i class="fa fa-sign-out"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container" style="margin-top: 8vh">
      <div class="row">
        <div class="col-md-3 box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6001/6001974.png"
            style="height: 20px"
          />
          <span style="margin: 30px">{{ coins.xrp.coin }}</span>
          <h2
            v-if="Number(coins.xrp.amount) < 1"
            class="text-center"
            style="margin-top: 6vh"
          >
            {{ Number(coins.xrp.amount).toFixed(4) }}
          </h2>
          <h2 v-else class="text-center" style="margin-top: 6vh">
            {{ Number(coins.xrp.amount).toFixed(4) }}
          </h2>
          <p style="font-size: 8pt" class="text-center">
            {{ Number(coins.xrp.amount) * 0.00002001 }} BTC
          </p>
          <div
            class="row"
            style="margin-top: 20vh; margin-bottom: 4vh; margin: 5px"
          >
            <button
              @click="selectedCoin = coins.xrp"
              style="margin-top: 6vh; background-color: white; color: black"
              class="btn btn-primary col-6"
              v-b-modal.buy
            >
              BUY
            </button>
            <button
              @click="selectedCoin = coins.xrp"
              style="margin-top: 6vh"
              class="btn btn-primary col-6"
              v-b-modal.sell
            >
              SELL
            </button>
          </div>
        </div>
        <div class="col-md-3 box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1346/1346606.png"
            style="height: 20px"
          />
          <span style="margin: 30px">{{ coins.eth.coin }}</span>
          <h2
            v-if="coins.eth.amount < 1"
            class="text-center"
            style="margin-top: 6vh"
          >
            {{ Number(coins.eth.amount).toFixed(6) }}
          </h2>
          <h2 v-else class="text-center" style="margin-top: 6vh">
            {{ Number(coins.eth.amount).toFixed(4) }}
          </h2>
          <p style="font-size: 8pt" class="text-center">
            {{ Number(coins.eth.amount) * 0.04791411 }} BTC
          </p>
          <div
            class="row"
            style="margin-top: 20vh; margin-bottom: 4vh; margin: 5px"
          >
            <button
              @click="selectedCoin = coins.eth"
              style="margin-top: 6vh; background-color: white; color: black"
              class="btn btn-primary col-6"
              v-b-modal.buy
            >
              BUY
            </button>
            <button
              @click="selectedCoin = coins.eth"
              style="margin-top: 6vh"
              class="btn btn-primary col-6"
              v-b-modal.sell
            >
              SELL
            </button>
          </div>
        </div>
        <div class="col-md-3 box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/775/775860.png"
            style="height: 20px"
          />
          <span style="margin: 30px">{{ coins.dash.coin }}</span>
          <h2
            v-if="Number(coins.dash.amount) < 1"
            class="text-center"
            style="margin-top: 6vh"
          >
            {{ Number(coins.dash.amount).toFixed(6) }}
          </h2>
          <h2 v-else class="text-center" style="margin-top: 6vh">
            {{ Number(coins.dash.amount).toFixed(4) }}
          </h2>
          <p style="font-size: 8pt" class="text-center">
            {{ Number(coins.dash.amount) * 0.06756612 }} BTC
          </p>
          <div
            class="row"
            style="margin-top: 20vh; margin-bottom: 4vh; margin: 5px"
          >
            <button
              @click="selectedCoin = coins.dash"
              style="margin-top: 6vh; background-color: white; color: black"
              class="btn btn-primary col-6"
              v-b-modal.buy
            >
              BUY
            </button>
            <button
              @click="selectedCoin = coins.dash"
              style="margin-top: 6vh"
              class="btn btn-primary col-6"
              v-b-modal.sell
            >
              SELL
            </button>
          </div>
        </div>
        <div class="col-md-3 box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4484/4484859.png"
            style="height: 20px"
          />
          <span style="margin: 30px">{{ coins.ltc.coin }}</span>
          <h2
            v-if="Number(coins.ltc.amount) < 1"
            class="text-center"
            style="margin-top: 6vh"
          >
            {{ Number(coins.ltc.amount).toFixed(6) }}
          </h2>
          <h2 v-else class="text-center" style="margin-top: 6vh">
            {{ Number(coins.ltc.amount).toFixed(4) }}
          </h2>
          <p style="font-size: 8pt" class="text-center">
            {{ Number(coins.ltc.amount) * 0.00592855 }} BTC
          </p>
          <div
            class="row"
            style="margin-top: 20vh; margin-bottom: 4vh; margin: 5px"
          >
            <button
              @click="selectedCoin = coins.ltc"
              style="margin-top: 6vh; background-color: white; color: black"
              class="btn btn-primary col-6"
              v-b-modal.buy
            >
              BUY
            </button>
            <button
              @click="selectedCoin = coins.ltc"
              style="margin-top: 6vh"
              class="btn btn-primary col-6"
              v-b-modal.sell
            >
              SELL
            </button>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 7vh">
        <div class="col-md-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 XRP</td>
                <td>0.00002001 BTC</td>
              </tr>
              <tr>
                <td>1 ETH</td>
                <td>0.04791411 BTC</td>
              </tr>
              <tr>
                <td>1 DASH</td>
                <td>0.06756612 BTC</td>
              </tr>
              <tr>
                <td>1 LTC</td>
                <td>0.00592855 BTC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Buy -->
    <b-modal id="buy" :title="'Buy ' + selectedCoin.coin" hide-footer>
      <div class="row">
        <div class="col-6">
          <label> {{ selectedCoin.coin }} </label>
          <input type="number" class="form-control" v-model="trade.amount" />
        </div>
        <div class="col-6">
          <label>SELL </label>
          <select class="form-control" v-model="trade.sell">
            <option v-for="item in coins" :key="item.coin">
              {{ item.coin }}
            </option>
          </select>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-12" style="margin-top: 5vh">
          <button
            class="btn btn-primary pull-right"
            style="width: 40%; float: right"
            @click="buyCoin(selectedCoin.coin, trade.sell, trade.amount)"
          >
            BUY
          </button>
        </div>
      </div>
    </b-modal>
    <!-- Sell -->
    <b-modal
      id="sell"
      :title="'Sell ' + selectedCoin.coin + ' | Amount :' + selectedCoin.amount"
      hide-footer
    >
      <div class="row">
        <div class="col-6">
          <label> {{ selectedCoin.coin }} </label>
          <input type="number" class="form-control" v-model="trade.amount" />
        </div>
        <div class="col-6">
          <label>BUY </label>
          <select class="form-control" v-model="trade.buy">
            <option v-for="item in coins" :key="item.coin">
              {{ item.coin }}
            </option>
          </select>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-12" style="margin-top: 5vh">
          <button
            class="btn btn-primary pull-right"
            style="width: 40%; float: right"
            @click="sellCoin(selectedCoin.coin, trade.buy, trade.amount)"
          >
            SELL
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      firstname: localStorage.firstname,
      lastname: localStorage.lastname,
      incoming: [],
      coins: {
        xrp: {},
        eth: {},
        ltc: {},
        dash: {},
      },
      selectedCoin: "",
      trade: {
        buy: "",
        sell: "",
        amount: "",
      },
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location = "/login";
    },
    sellCoin(sell, buy, amount) {
      const data = {
        selling: sell,
        buying: buy,
        amount: amount,
        userid: localStorage.id,
        type: "SELL",
      };
      axios({
        method: "post",
        url: "/exchange",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(data),
      }).then(function (response) {
        if (response.data.success == true) {
          window.location = "/";
        } else {
          alert("Lütfen daha sonra tekrar deneyiniz");
        }
      });
    },
    buyCoin(buy, sell, amount) {
      const data = {
        selling: sell,
        buying: buy,
        amount: amount,
        userid: localStorage.id,
        type: "BUY",
      };
      axios({
        method: "post",
        url: "/exchange",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(data),
      }).then(function (response) {
        if (response.data.success == true) {
          window.location = "/";
        } else {
          alert("Lütfen daha sonra tekrar deneyiniz");
        }
      });
    },
    getWallet() {
      axios.get(`/get-wallet/?id=${localStorage.id}`).then((response) => {
        if (response.data.success == true) {
          this.incoming = response.data.data;
          this.coins.xrp = this.incoming.filter(
            (item) => item.coin == "XRP"
          )[0];
          this.coins.eth = this.incoming.filter(
            (item) => item.coin == "ETH"
          )[0];
          this.coins.dash = this.incoming.filter(
            (item) => item.coin == "DASH"
          )[0];
          this.coins.ltc = this.incoming.filter(
            (item) => item.coin == "LTC"
          )[0];
        } else {
          this.incoming = [];
        }
      });
    },
  },
  mounted() {
    this.getWallet();
  },
};
</script>

<style>
.navbar {
  box-shadow: 2px 4px 10px lightgray;
}
.box {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
}
@media only screen and (max-width: 800px) {
  .box {
    width: 100vw !important;
    border: 1px solid lightgray;
    margin-top: 3vw !important;
  }
}
</style>