export default class UsersService {
  static async getUsers() {
    try {
      const response = await fetch('https://localhost:44312/api/UsersUI/getUsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}