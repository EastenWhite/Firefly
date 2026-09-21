import GlowChatSender from "@components/library/GlowChatSender.astro";
import glowChatSenderSource from "@components/library/GlowChatSender.astro?raw";
import GradientButton from "@components/library/GradientButton.astro";
import gradientButtonSource from "@components/library/GradientButton.astro?raw";
import type { ComponentLibraryConfig } from "@/types/componentLibraryConfig";

// ============================================================================
// 组件库登记表 - 新增自制组件时，在下面的数组里加一条登记即可
//
// 步骤：
// 1. 在 src/components/library/ 下写好组件文件（.astro）
// 2. 顶部 import 组件本体，并用 ?raw 导入同一个文件的源码（不用手抄代码）
// 3. 在数组里加一条登记，/components/ 列表卡片与详情页会自动生成
// ============================================================================
export const componentLibraryConfig: ComponentLibraryConfig = [
	{
		slug: "gradient-button",
		name: "渐变按钮",
		type: "按钮",
		description:
			"主题色渐变背景的按钮，悬停轻微上浮、按下回缩，传入 href 时渲染为链接，否则为普通按钮。",
		component: GradientButton,
		source: gradientButtonSource,
		order: 1,
	},
	{
		slug: "glow-chat-sender",
		name: "流光会话框",
		type: "输入框",
		description:
			"会话未开始（输入为空）时，外圈有一道顺时针流动的主题色描边和弥散光晕，开始输入后自动淡出只剩静态描边。支持 Enter 发送、Shift + Enter 换行，以及清空按钮，发送时派发 glow-sender:submit 事件。",
		component: GlowChatSender,
		source: glowChatSenderSource,
		order: 2,
	},
];
