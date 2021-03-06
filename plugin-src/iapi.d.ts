export type UIMethods = {

};

export type PluginMethods = {
    /** return created node id */
    createRectangle(width: number, height: number): string;

    listenSelectionChange(onSelectionChange: (selectionNodeIds: string[]) => void): void;
};