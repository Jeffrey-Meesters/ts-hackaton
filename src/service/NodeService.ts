export const NodeService = {
    getTreeNodesData() {
        return Promise.resolve([
            {
                key: '0',
                label: 'Root',
                children: [
                    {
                        key: '0-0',
                        label: 'Child 1',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'Grandchild 1-1',
                            },
                            {
                                key: '0-0-1',
                                label: 'Grandchild 1-2',
                            },
                        ],
                    },
                    {
                        key: '0-1',
                        label: 'Child 2',
                        children: [
                            {
                                key: '0-1-0',
                                label: 'Grandchild 2-1',
                            },
                        ],
                    },
                ],
            },
            {
                key: '1',
                label: 'Root 2',
                children: [
                    {
                        key: '1-0',
                        label: 'Child 1',
                    },
                    {
                        key: '1-1',
                        label: 'Child 2',
                        children: [
                            {
                                key: '1-1-0',
                                label: 'Grandchild 2-1',
                            },
                            {
                                key: '1-1-1',
                                label: 'Grandchild 2-2',
                            },
                        ],
                    },
                ],
            },
        ]);
    },
};