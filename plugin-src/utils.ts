export const isEqualNodeArray = (a1: readonly SceneNode[], a2: readonly SceneNode[]) => {
    if (a1.length !== a2.length) return false;
    if (a1.length === a2.length && a1.length === 0) return true;

    const ids = a1.map(x => x.id);
    for (const n of a2) {
        if (!ids.includes(n.id)) {
            return false;
        }
    }
    return true;
};