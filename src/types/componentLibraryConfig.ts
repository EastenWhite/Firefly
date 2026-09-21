import type { AstroComponentFactory } from "astro/runtime/server/index.js";

/** 组件库条目：登记一个自制组件的元数据、预览组件与源码 */
export interface ComponentLibraryItem {
	/** 详情页路由标识，全站唯一，对应 /components/<slug>/ */
	slug: string;
	/** 组件名，显示在卡片和详情页标题 */
	name: string;
	/** 组件类型，显示为卡片上的分类标签 */
	type: string;
	/** 组件简介，用于卡片与详情页的组件介绍 */
	description: string;
	/** 预览组件，列表卡片与详情页共用同一个组件 */
	component: AstroComponentFactory;
	/** 组件源码文本，登记时用 ?raw 导入组件文件即可 */
	source: string;
	/** 列表排序，数字越小越靠前 */
	order?: number;
}

/** 组件库登记表 */
export type ComponentLibraryConfig = ComponentLibraryItem[];
