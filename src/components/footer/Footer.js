import React from 'react'
import { data } from '../../data'
class Footer extends React.Component {
    render() {
        let footer = data.footer.filter(item => {
            return item.parentWrapper.id === this.props.foterId
        })
        return (
            <div>
                {
                    footer[0] ?
                        <div className={footer[0].parentWrapper.className}>
                            <img src={footer[0].parentWrapper.img.url} alt={footer[0].parentWrapper.img.alt} className={footer[0].parentWrapper.img.className} />
                            <div className={footer[0].parentWrapper.container.className}>
                                <div className={footer[0].parentWrapper.container.row.className}>
                                    <div className={footer[0].parentWrapper.container.row.col.className}>
                                        <div className={footer[0].parentWrapper.container.row.col.content.className}>
                                            <h3 data-aos={footer[0].parentWrapper.container.row.col.content.heading3.dataAos} data-aos-anchor-placement={footer[0].parentWrapper.container.row.col.content.heading3.dataAosAnchorPlacement}>{footer[0].parentWrapper.container.row.col.content.heading3.value}</h3>

                                            <form>
                                                <div className={footer[0].parentWrapper.container.row.col.content.rel.className}>
                                                    <img src={footer[0].parentWrapper.container.row.col.content.rel.ima.url} alt={footer[0].parentWrapper.container.row.col.content.rel.ima.alt} />
                                                    <input type={footer[0].parentWrapper.container.row.col.content.rel.input.type} placeholder={footer[0].parentWrapper.container.row.col.content.rel.input.placeholder} />
                                                    
                                                </div>
                                                <a href={footer[0].parentWrapper.container.row.col.content.link.to} className={footer[0].parentWrapper.container.row.col.content.link.className}>{footer[0].parentWrapper.container.row.col.content.link.value}</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default Footer;