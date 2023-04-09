
import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../assets/logo.png';

export default function MainItems() {
    const items = [
        {
            icon: 'pi pi-bell p-0', 
        },
        {
            label: 'Shad Sheikh',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        },

                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        }
    ];

    const start = <img alt="logo" src={logo} height="40"></img>;
    return (
        <div className="card">
            <Menubar model={items} start={start} className='d-flex justify-content-between'/>
        </div>
    )
}
  