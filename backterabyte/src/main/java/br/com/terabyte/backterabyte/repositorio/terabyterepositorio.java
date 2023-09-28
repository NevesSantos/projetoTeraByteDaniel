package br.com.terabyte.backterabyte.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.terabyte.backterabyte.modelo.terabytemodel;

public interface terabyterepositorio extends CrudRepository<terabytemodel, Integer> {
    
}
