<template>
    <div
        v-if="state.visible"
        class="lf-context-menu"
        :style="{ left: state.x + 'px', top: state.y + 'px' }"
        @contextmenu.prevent>
        <div
            v-for="item in visibleItems"
            :key="item.key"
            class="menu-item"
            :class="{ disabled: item.disabled?.(state.ctx!) }"
            @click="handleClick(item)">
            {{ item.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from "vue";
import { closeContextMenu, contextMenuState as state } from "./menu.state";
import { ContextMenuItem } from "../types";

const visibleItems = computed(() => state.items.filter(item => !item.show || item.show(state.ctx!)));

/**
 * 处理点击事件
 * @param item 上下文菜单项
 */
function handleClick(item: ContextMenuItem) {
    if (item.disabled?.(state.ctx!)) return;
    item.onClick(state.ctx!);
    closeContextMenu();
}

/**
 * 全局点击,关闭上下文菜单
 */
function onGlobalClick() {
    closeContextMenu();
}

/**
 * 挂载的时候添加全局点击回调
 */
onMounted(() => {
    document.addEventListener("click", onGlobalClick);
});

/**
 * 取消挂载的时候添加全局点击回调
 */
onBeforeUnmount(() => {
    document.removeEventListener("click", onGlobalClick);
});
</script>

<style scoped>
.lf-context-menu {
    position: fixed;
    z-index: 9999;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    padding: 4px 0;
}

.menu-item {
    padding: 6px 12px;
    cursor: pointer;
    font-size: 13px;
}

.menu-item:hover {
    background: #f5f7fa;
}

.menu-item.disabled {
    color: #bbb;
    cursor: not-allowed;
}
</style>
