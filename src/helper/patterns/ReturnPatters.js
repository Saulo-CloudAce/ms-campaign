function sucess({ code, data, message }) {
  return {
    ok: true,
    code: code || 200,      // Código de sucesso se caso tiver retornando para o cliente
    data,                   // Objeto de retorno
    message                 // Mensagem de sucesso que será exibida para o cliente
  }
}

function error({ code, error, message }) {
  return {
    ok: false,
    code: code || 500,      // Código de erro se caso tiver retornando para o cliente
    error,                  // Objeto de erro
    message                 // Mensagem de erro que será exibida para o cliente
  }
}

function apiResponse(res, { ok, code, data, offset, limit, total, message }) {
  return res.status(code).json({ ok, data, offset, limit, total, message })
}

function serviceError(err) {
  return error({
    code: err?.response?.status || 500,
    error: err?.response?.data,
    message: err?.response?.data?.message
  })
}

export { sucess, error, apiResponse, serviceError }
