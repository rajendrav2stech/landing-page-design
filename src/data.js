import amazingMobileLogo from "../src/assets/images/logo.png"
import heroamzingMobile from "../src/assets/images/hero-mobiile.png"
import amazingMobileline1 from "../src/assets/images/layer1.png"
import amazingMobileicon1 from "../src/assets/images/icon-1.png"
import amazingMobileicon2 from "../src/assets/images/icon-2.png"
import amazingMobileicon3 from "../src/assets/images/icon-3.png"
import amazingMobifooterBg from "../src/assets/images/footer-bg.png"
import amazingMobilemail from "../src/assets/images/mail.png"

export const data = {
    header: [
        {
            parentWrapper: {
                id: 'header',
                className: 'header',
                fluid: {
                    className: 'container-fluid',
                    row: {
                        className: 'row',
                        navbar: {
                            className: 'navbar navbar-expand-lg navbar-light',
                            link: {
                                className: 'navbar-brand',
                                to: '/',
                                img: {
                                    url: amazingMobileLogo,
                                    alt: 'logo',
                                },
                            },
                            button: {
                                className: 'navbar-toggler',
                                type: 'button',
                                dataToggle: 'collapse',
                                dataTarget: '#navbarSupportedContent',
                                ariaControls: 'navbarSupportedContent',
                                ariaExpanded: 'false',
                                ariaLabel: 'Toggle navigation',
                                spanText: {
                                    className: 'navbar-toggler-icon',
                                }
                            },
                            menu: {
                                className: 'collapse navbar-collapse text-right justify-content-end',
                                id: 'navbarSupportedContent',
                                button: [
                                    {
                                        btn1: {
                                            className: 'btn btn-outline-success no_bg my-2 my-sm-0',
                                            type: 'submit',
                                            value: 'SIGN UP',
                                        }
                                    },
                                    {
                                        btn1: {
                                            className: 'btn btn-outline-success sh my-2 my-sm-0',
                                            type: 'submit',
                                            value: 'LOGIN',
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    ],
    heroBanenr: [
        {
            parentWrapper: {
                id: 'section1',
                className: 'hero_section_1',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-6 col-sm-6',
                            content: {
                                className: 'contnet',
                                heading1: {
                                    value: 'Amazing Mobile ',
                                    anchor: {
                                        url: '/',
                                        className: 'typewrite',
                                        dataPeriod: '2000',
                                        dataType: [
                                            "[Seriously.",
                                            "Creative.]"
                                        ],
                                        span: {
                                            className: 'wrap'
                                        }
                                    },
                                },
                                para: {
                                    value: "We build this app because we wanted to help people. That’s what every app in the universe should do: make people’s life easier."
                                },
                                anchor: {
                                    className: 'hvr-shutter-in-horizontal',
                                    value: 'Get Started',
                                    href: '#',
                                }
                            }
                        },
                        mobiileImg: {
                            className: 'mobile_img',
                            img: {
                                url: heroamzingMobile,
                                alt: 'Hero Mobile',
                            }
                        }
                    }
                }
            }
        }
    ],
    clientsLogo: [
        {
            parentWrapper: {
                id: 'section2',
                className: 'hero_section_2',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-12 col-sm-12',
                            headingh4: {
                                className: 'text-center',
                                value: 'The most important clients we had so far.',
                            },
                            ul: {
                                className: 'clearfix d-flex justify-content-center align-items-center',
                                list: [
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: amazingMobileLogo,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    ],
    supperApp: [
        {
            parentWrapper: {
                id: 'section3',
                className: 'hero_section_3',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col12: {
                            className: 'col-md-12 col-sm-12 text-center',
                            heading2: {
                                className: 'text-center',
                                value: 'How SuperApp Can Help You',
                                img: {
                                    url: amazingMobileline1,
                                    alt: 'line',
                                }
                            }
                        },
                        col: [
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '5000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon1,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Easily connect to desktop',
                                        },
                                        para: {
                                            value: 'We build this app because we wanted to help people. That’s what every app should do, right?'
                                        }
                                    }
                                }
                            },
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '4000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon2,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Shows you charts and pies',
                                        },
                                        para: {
                                            value: 'I drew a pie with my favorite chart and a chart that describes my favorite pies.'
                                        }
                                    }
                                }
                            },
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '3000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon3,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Brings you revenue',
                                        },
                                        para: {
                                            value: 'An app that makes you money: isn’t that a dream of a business model?'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    ],
    allFeature: [
        {
            parentWrapper: {
                id: 'section4',
                section: [
                    {
                        listSec: {
                            className: 'hero_section_4 nwe',
                            container: {
                                className: 'container',
                                row: {
                                    className: 'row',
                                    col: [
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'banner1',
                                                    box: [
                                                        {
                                                            boxList: {
                                                                className: 's1'
                                                            }
                                                        },
                                                        {
                                                            boxList: {
                                                                className: 's2',
                                                                dtaAos: 'flip-up',
                                                                dataAosOffset: '100',
                                                                dataAosEasing: 'ease-in-sine',
                                                            }
                                                        },
                                                        {
                                                            boxList: {
                                                                className: 's3',
                                                                dtaAos: 'flip-left',
                                                                dataAosOffset: '200',
                                                                dataAosEasing: 'ease-in-sine',
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'content p_20',
                                                    heading2: {
                                                        className: 'text-left',
                                                        dataAos: 'fade-left',
                                                        img: {
                                                            url: amazingMobileline1,
                                                            alt: 'line',
                                                        },
                                                        value: 'Great Feature',
                                                    },
                                                    para: {
                                                        dataAos: 'fade-left',
                                                        value: 'There are many variation passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                                                    },
                                                    ul: [
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '500',
                                                                value: 'Important aspect that should be mentioned.'
                                                            }
                                                        },
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '600',
                                                                value: 'Another list item that describes something cool.'
                                                            }
                                                        },
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '700',
                                                                value: 'Last list item or something'
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                    {
                        listSec: {
                            className: 'hero_section_4 odd',
                            container: {
                                className: 'container',
                                row: {
                                    className: 'row',
                                    col: [
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'banner1 p_20',
                                                    box: [
                                                        {
                                                            boxList: {
                                                                className: 's1'
                                                            }
                                                        },
                                                        {
                                                            boxList: {
                                                                className: 's2',
                                                                dtaAos: 'zoom-in',
                                                                dataAosOffset: '100',
                                                                dataAosEasing: 'ease-in-sine',
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'content p_60',
                                                    heading2: {
                                                        className: 'text-left',
                                                        dataAos: 'fade-left',
                                                        img: {
                                                            url: amazingMobileline1,
                                                            alt: 'line',
                                                        },
                                                        value: 'Another Cool Feature',
                                                    },
                                                    para: {
                                                        dataAos: 'fade-left',
                                                        value: 'There are many variation passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                                                    }
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                    {
                        listSec: {
                            className: 'hero_section_4 even',
                            container: {
                                className: 'container',
                                row: {
                                    className: 'row',
                                    col: [
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'banner1',
                                                    box: [
                                                        {
                                                            boxList: {
                                                                className: 's1'
                                                            }
                                                        },
                                                        {
                                                            boxList: {
                                                                className: 's2',
                                                                dtaAos: 'fade-right',
                                                                dataAosOffset: '100',
                                                                dataAosEasing: 'ease-in-sine',
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'content p_20',
                                                    heading2: {
                                                        className: 'text-left',
                                                        dataAos: 'fade-left',
                                                        img: {
                                                            url: amazingMobileline1,
                                                            alt: 'line',
                                                        },
                                                        value: 'Awesome Feature',
                                                    },
                                                    para: {
                                                        dataAos: 'fade-left',
                                                        value: 'There are many variation passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                                                    }
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                ]
            }
        }
    ],
    footer: [
        {
            parentWrapper: {
                id: 'footer',
                className: 'footer',
                img: {
                    className: 'banner',
                    url: amazingMobifooterBg,
                    alt: 'background',
                },
                container: {
                    className: 'container text-center',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-12 col-sm-12',
                            content: {
                                className: 'content',
                                heading3: {
                                    dataAos: 'fade-up',
                                    dataAosAnchorPlacement: 'top-bottom',
                                    value: 'We built this app to help people. Join 100,000 users who already have SuperApp installed.'
                                },
                                rel: {
                                    className: 'rel',
                                    ima: {
                                        url: amazingMobilemail,
                                        alt: 'mail',
                                    },
                                    input: {
                                        type: 'email',
                                        name: '',
                                        placeholder: 'Your email adress',
                                    },
                                },
                                link: {
                                    to: '#/',
                                    className: 'hvr-shutter-in-horizontal',
                                    value: 'Join SuperApp',
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
}