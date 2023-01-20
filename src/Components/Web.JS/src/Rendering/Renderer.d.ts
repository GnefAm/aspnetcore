import '../Platform/Platform';
import '../Environment';
import { RenderBatch } from './RenderBatch/RenderBatch';
import { BrowserRenderer } from './BrowserRenderer';
import { LogicalElement } from './LogicalElements';
export declare function attachRootComponentToLogicalElement(browserRendererId: number, logicalElement: LogicalElement, componentId: number, appendContent: boolean): void;
export declare function attachRootComponentToElement(elementSelector: string, componentId: number, browserRendererId?: number): void;
export declare function getRendererer(browserRendererId: number): BrowserRenderer;
export declare function renderBatch(browserRendererId: number, batch: RenderBatch): void;
export declare function resetScrollAfterNextBatch(): void;
