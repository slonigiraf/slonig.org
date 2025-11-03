import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const organizations = [
    { country: 'United States', name: 'Sam Houston State University' },

    { country: 'Türkiye', name: 'Istanbul STEAM Bilim Teknoloji Eğitim Kültür Sanat Derneği' },
    { country: 'Spain', name: 'Fundación AI Granada Research & Innovation' },
    { country: 'Estonia', name: 'Project Factory Social Innovation OÜ' },
    { country: 'Cyprus', name: 'AUB Limited' },
    { country: 'North Macedonia', name: 'Secondary School of Economics, Law and Commerce “Kuzman Josifoski Pitu”' },
    { country: 'North Macedonia', name: 'Centre for Inclusion and Mobility of Youth' },
    { country: 'Serbia', name: 'International School' },

    { country: 'Serbia', name: 'Primary School Savremena' },
    { country: 'Spain', name: 'IES Sedaví' },
    { country: 'Spain', name: 'Escuelas de Artesanos' },
    { country: 'Spain', name: 'Universitat de Lleida' },
    { country: 'Nigeria', name: 'Enugu State University of Science and Technology' },
    { country: 'Nigeria', name: 'University of Ibadan' },
    { country: 'Ghana', name: 'Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development' },
    { country: 'Philippines', name: 'Santiago National High School' },

    { country: 'Somaliland', name: 'Adal Medical University' },
    { country: 'United States', name: 'University of Arizona' },
    { country: 'Nigeria', name: 'Obafemi Awolowo University' },
    { country: 'Ethiopia', name: 'Addis Ababa University' },
    { country: 'Nigeria', name: 'Kwara State College of Education (Technical)' },

    { country: 'Argentina', name: 'Biblionet' },
    { country: 'Egypt', name: 'Minia University' },
    { country: 'Türkiye', name: 'Antalya Kepez İlçe Milli Eğitim Müdürlüğü' },
    { country: 'Nigeria', name: 'Osun State University' },
    { country: 'Nigeria', name: 'Nnamdi Azikiwe University' },
    { country: 'Spain', name: 'University of the Basque Country' },
    { country: 'Indonesia', name: 'Universitas Galuh' },
    { country: 'Armenia', name: 'Armenian State Pedagogical University after Kh. Abovyan' },
    { country: 'Nigeria', name: 'Usmanu Danfodiyo University Sokoto' },
    { country: 'Nigeria', name: 'QEDA' },
    { country: 'Kenya', name: 'University of Nairobi' },
]

const Collaborators = () => {
    const columns = [0, 1, 2, 3].map(i => organizations.slice(i * 8, i * 8 + 8))

    return (
        <section className="agency counter counter-bg">
            <Container>

                <div className="format-head-text" style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "20px",
                }}>
                    <h2 className="about-font-header" style={{ textTransform: 'none' }}>Our Collaborators</h2>
                </div>
                <br />
                <br />

                <Row>
                    {columns.map((group, idx) => (
                        <Col md="3" xs="6" key={idx}>
                            <div className="counters hover-counter active">
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {group.map((org, i) => (
                                        <li key={i} style={{ marginBottom: '10px', lineHeight: '1.3em' }}>
                                            <span style={{ display: 'block', fontWeight: 'bold', color: '#0069b4' }}>{org.country}</span>
                                            <span style={{ color: '#8e8c8cff' }}>{org.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Collaborators