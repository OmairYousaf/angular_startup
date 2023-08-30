export interface Menu {
    icon: string;
    rout: string;
    title: string;
}


export class MenuListClass {
    menuList: Menu[] = [
        { title: 'Material Form', rout: 'form', icon: 'people' },

        { title: 'Material List', rout: 'list', icon: 'settings' },
    ]
}