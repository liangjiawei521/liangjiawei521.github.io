
 <template>
  <div>
    <el-menu-item
      v-if="!item.children"
      :index="item.path  + item.path"
      class="home"
    >
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>

      <el-menu-item
        :index="item.path + '/' + smallItem.path"
        v-for="smallItem in item.children"
        :key="smallItem.path"
      >
        <i :class="smallItem.icon"></i>
        <span>{{ smallItem.title }}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>