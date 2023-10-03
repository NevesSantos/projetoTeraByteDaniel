package br.com.terabyte.backterabyte.controler;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.terabyte.backterabyte.modelo.terabytemodel;
import br.com.terabyte.backterabyte.repositorio.terabyterepositorio;

@RestController
@CrossOrigin("*")
public class terabytecontroler {

    @Autowired
    terabyterepositorio repo;

    @GetMapping
    public Iterable<terabytemodel> listar() {
        return repo.findAll();
    }

    public byte[] imagem(Integer id){
        Optional<terabytemodel> model = repo.findById(id);
        return model.orElse(null).getImg();

    }

    @PostMapping
    public ResponseEntity<terabytemodel> cadastrar(@RequestParam("img") MultipartFile img,
            @RequestParam("description") String description, @RequestParam("preco") Double preco,
            @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes = img.getBytes();
            terabytemodel model = new terabytemodel();
            model.setDescription(description);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<terabytemodel>(repo.save(model), HttpStatus.CREATED);

        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<terabytemodel> alterar(@RequestParam("img") MultipartFile img,
            @RequestParam("description") String description, @RequestParam("preco") Double preco,
            @RequestParam("tipo") Integer tipo, @RequestParam("id") Integer id) {
        try {
            byte[] imgBytes;
            terabytemodel model = new terabytemodel();
            if (img.isEmpty()) {
                imgBytes = imagem(id);
            } else {
                imgBytes = img.getBytes();
            }
            model.setDescription(description);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            model.setId(id);
            return new ResponseEntity<terabytemodel>(repo.save(model), HttpStatus.CREATED);

        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}
