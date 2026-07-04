export default function DetailBlock({ data }) {
    return (
        <div className="detail-block" id={data.id}>
            <div className="detail-text-wrapper">
                <span className="detail-tagline">{data.tagline}</span>
                <h3>{data.title}</h3>

                {data.description?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}

                {data.benefits && (
                    <div className="detail-benefits">
                        <h4>{data.benefits.title}</h4>
                        <ul className="detail-benefits-list">
                            {data.benefits.items.map((item, idx) => (
                                <li key={idx}>
                                    <strong>{item.title}</strong> {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {data.faqs && (
                    <div className="detail-faq-list">
                        <h4>{data.faqs.title}</h4>
                        {data.faqs.items.map((faq, idx) => (
                            <div className="detail-faq-item" key={idx}>
                                <h5>{faq.question}</h5>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                )}

                {data.extraContent && (
                    <p dangerouslySetInnerHTML={{ __html: data.extraContent }} />
                )}

                <a href={data.button.link} className="btn btn-primary">
                    {data.button.text}
                </a>
            </div>

            <div className="detail-img-wrapper">
                <img
                    src={data.image.src}
                    alt={data.image.alt}
                    className="detail-img"
                />
            </div>
        </div>
    );
}
