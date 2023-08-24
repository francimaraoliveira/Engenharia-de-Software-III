/* 2ª questão */
enum Status {
    DRAFT,
    PUBLISHED,
    DELETED
}

public class Post {
    private int id;
    private String text;
    private Status status;

    Post(int id, String text, Status status) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }

    public void publish() {
        validate();
        setStatus(Status.PUBLISHED);
    }

    private void validate() {
        if (status == Status.PUBLISHED) {
            throw new IllegalStateException("O post já foi publicado.");
        }
        if (status == Status.DELETED) {
            throw new IllegalStateException("O post foi excluído e não pode ser publicado.");
        }
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}