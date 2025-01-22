import apiClient from "./apiClient";
/**
 * Adiciona um imóvel aos favoritos do usuário.
 * @param {number} userId - ID do usuário.
 * @param {number} immobileId - ID do imóvel.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<void>}
 */
export const addFavorite = async (userId, immobileId, token) => {
  try {
    console.log("adicionando favorito...")
    const response = await apiClient.post(
      "/create-favorites",
      { userId, immobileId },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token de autenticação
        },
      }
    );
    console.log("Favorito adicionado:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar favorito:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Erro ao adicionar favorito.");
  }
};
/**
 * Busca os favoritos do usuário.
 * @param {number} userId - ID do usuário.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<any[]>} Lista de imóveis favoritos.
 */
export const getFavorites = async (userId, token) => {
    try {
        console.log("Pegando favoritos...")
      const response = await apiClient.get(`/favorites/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token de autenticação
        },
      });
      console.log("Favoritos recuperados:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Erro ao buscar favoritos.");
    }
  };
  export const deleteFavorite = async (favoriteId, token) => {
    try {
      console.log("Removendo favorito com ID:", favoriteId);
      const response = await apiClient.delete(`/delete-favorites/${favoriteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Favorito removido com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao remover favorito:", error.response?.data || error.message);
      throw error;
    }
  };
  