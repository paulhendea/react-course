import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap'
import { useTranslatorReducer } from './hooks/useTranslatorReducer'
import { AutoLanguage, FromTo } from './constants/constants'
import { SwapIcon } from './components/Icons/Icons'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

export function App () {
  const {
    translatorState,
    swapLanguages,
    setFromLanguage,
    setToLanguage
  } = useTranslatorReducer()

  return (
    <Container fluid>
      <h1>Google translator 🌍</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={FromTo.From} value={translatorState.fromLanguage} onChange={setFromLanguage} />
            <Form.Control as='textarea' placeholder='Enter text' autoFocus />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button
            variant='link'
            onClick={() => { swapLanguages() }}
            disabled={translatorState.fromLanguage === AutoLanguage}
          >
            <SwapIcon />
          </Button>
          </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={FromTo.To} value={translatorState.toLanguage} onChange={setToLanguage} />
            <Form.Control as='textarea' placeholder='Translation' />
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}
