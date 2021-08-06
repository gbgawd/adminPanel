<template>
  <CRow>
    <CCol sm="12" lg="12">
      <CCard> 
        <CCardHeader >
          Карт Хянаx
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            :items="items"
            :fields="fields"
            :items-per-page="10"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
            
          >
            <template #status="data">
              <td>                 
                <CSwitch size='sm' class="mx-1" color="success" :checked.sync="data.item.status" variant="3d" />
              </td>
              
            </template>            
          </CDataTable>          
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  

</template>

<script>

import usersData from './UsersData'
export default {
  name: 'Users',
  data () {
    return {
      items: usersData,
      fields: [
        { key: 'username', label: 'Бүтэн нэр', _classes: 'font-weight-bold' },
        { key: 'registered', label: 'Бүртгүүлсэн огноо'},
        { key: 'role', label: 'Албан тушаал'},
        { key: 'status', label: 'Картын төлөв'}
      ],
      activePage: 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {    
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
